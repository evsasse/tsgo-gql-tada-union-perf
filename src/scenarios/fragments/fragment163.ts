import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken161 } from "./fragment161";
import type { FragmentToken162 } from "./fragment162";

export const FRAGMENT_163 = gql(`
  fragment Fragment163 on Member162 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_162
    memberCount_162
    memberMetric_162
  }
`);

type FragmentResult163 = ResultOf<typeof FRAGMENT_163>;
type FragmentSelf163 = NonNullable<FragmentResult163>;

export type FragmentToken163 =
  | FragmentSelf163["__typename"]
  | FragmentSelf163["typenameHint"] | FragmentToken161 | FragmentToken162;
