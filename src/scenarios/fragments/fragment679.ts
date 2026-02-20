import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken677 } from "./fragment677";
import type { FragmentToken678 } from "./fragment678";

export const FRAGMENT_679 = gql(`
  fragment Fragment679 on Member118 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_118
    memberCount_118
    memberMetric_118
  }
`);

type FragmentResult679 = ResultOf<typeof FRAGMENT_679>;
type FragmentSelf679 = NonNullable<FragmentResult679>;

export type FragmentToken679 =
  | FragmentSelf679["__typename"]
  | FragmentSelf679["typenameHint"] | FragmentToken677 | FragmentToken678;
