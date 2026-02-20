import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken768 } from "./fragment768";
import type { FragmentToken769 } from "./fragment769";

export const FRAGMENT_770 = gql(`
  fragment Fragment770 on Member209 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_209
    memberCount_209
    memberMetric_209
  }
`);

type FragmentResult770 = ResultOf<typeof FRAGMENT_770>;
type FragmentSelf770 = NonNullable<FragmentResult770>;

export type FragmentToken770 =
  | FragmentSelf770["__typename"]
  | FragmentSelf770["typenameHint"] | FragmentToken768 | FragmentToken769;
