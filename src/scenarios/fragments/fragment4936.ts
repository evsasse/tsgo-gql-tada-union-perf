import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4934 } from "./fragment4934";
import type { FragmentToken4935 } from "./fragment4935";

export const FRAGMENT_4936 = gql(`
  fragment Fragment4936 on Member175 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_175
    memberCount_175
    memberMetric_175
  }
`);

type FragmentResult4936 = ResultOf<typeof FRAGMENT_4936>;
type FragmentSelf4936 = NonNullable<FragmentResult4936>;

export type FragmentToken4936 =
  | FragmentSelf4936["__typename"]
  | FragmentSelf4936["typenameHint"] | FragmentToken4934 | FragmentToken4935;
