import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4929 } from "./fragment4929";
import type { FragmentToken4930 } from "./fragment4930";

export const FRAGMENT_4931 = gql(`
  fragment Fragment4931 on Member170 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_170
    memberCount_170
    memberMetric_170
  }
`);

type FragmentResult4931 = ResultOf<typeof FRAGMENT_4931>;
type FragmentSelf4931 = NonNullable<FragmentResult4931>;

export type FragmentToken4931 =
  | FragmentSelf4931["__typename"]
  | FragmentSelf4931["typenameHint"] | FragmentToken4929 | FragmentToken4930;
