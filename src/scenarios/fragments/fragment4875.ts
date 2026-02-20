import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4873 } from "./fragment4873";
import type { FragmentToken4874 } from "./fragment4874";

export const FRAGMENT_4875 = gql(`
  fragment Fragment4875 on Member114 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_114
    memberCount_114
    memberMetric_114
  }
`);

type FragmentResult4875 = ResultOf<typeof FRAGMENT_4875>;
type FragmentSelf4875 = NonNullable<FragmentResult4875>;

export type FragmentToken4875 =
  | FragmentSelf4875["__typename"]
  | FragmentSelf4875["typenameHint"] | FragmentToken4873 | FragmentToken4874;
