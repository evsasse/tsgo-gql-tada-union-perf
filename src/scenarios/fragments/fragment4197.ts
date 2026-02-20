import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4195 } from "./fragment4195";
import type { FragmentToken4196 } from "./fragment4196";

export const FRAGMENT_4197 = gql(`
  fragment Fragment4197 on Member276 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_276
    memberCount_276
    memberMetric_276
  }
`);

type FragmentResult4197 = ResultOf<typeof FRAGMENT_4197>;
type FragmentSelf4197 = NonNullable<FragmentResult4197>;

export type FragmentToken4197 =
  | FragmentSelf4197["__typename"]
  | FragmentSelf4197["typenameHint"] | FragmentToken4195 | FragmentToken4196;
