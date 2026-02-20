import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4649 } from "./fragment4649";
import type { FragmentToken4650 } from "./fragment4650";

export const FRAGMENT_4651 = gql(`
  fragment Fragment4651 on Member170 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_170
    memberCount_170
    memberMetric_170
  }
`);

type FragmentResult4651 = ResultOf<typeof FRAGMENT_4651>;
type FragmentSelf4651 = NonNullable<FragmentResult4651>;

export type FragmentToken4651 =
  | FragmentSelf4651["__typename"]
  | FragmentSelf4651["typenameHint"] | FragmentToken4649 | FragmentToken4650;
