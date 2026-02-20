import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4603 } from "./fragment4603";
import type { FragmentToken4604 } from "./fragment4604";

export const FRAGMENT_4605 = gql(`
  fragment Fragment4605 on Member124 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_124
    memberCount_124
    memberMetric_124
  }
`);

type FragmentResult4605 = ResultOf<typeof FRAGMENT_4605>;
type FragmentSelf4605 = NonNullable<FragmentResult4605>;

export type FragmentToken4605 =
  | FragmentSelf4605["__typename"]
  | FragmentSelf4605["typenameHint"] | FragmentToken4603 | FragmentToken4604;
