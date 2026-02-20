import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3802 } from "./fragment3802";
import type { FragmentToken3803 } from "./fragment3803";

export const FRAGMENT_3804 = gql(`
  fragment Fragment3804 on Member163 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_163
    memberCount_163
    memberMetric_163
  }
`);

type FragmentResult3804 = ResultOf<typeof FRAGMENT_3804>;
type FragmentSelf3804 = NonNullable<FragmentResult3804>;

export type FragmentToken3804 =
  | FragmentSelf3804["__typename"]
  | FragmentSelf3804["typenameHint"] | FragmentToken3802 | FragmentToken3803;
