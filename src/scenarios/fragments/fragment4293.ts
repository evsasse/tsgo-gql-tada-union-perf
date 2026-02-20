import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4291 } from "./fragment4291";
import type { FragmentToken4292 } from "./fragment4292";

export const FRAGMENT_4293 = gql(`
  fragment Fragment4293 on Member92 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_92
    memberCount_92
    memberMetric_92
  }
`);

type FragmentResult4293 = ResultOf<typeof FRAGMENT_4293>;
type FragmentSelf4293 = NonNullable<FragmentResult4293>;

export type FragmentToken4293 =
  | FragmentSelf4293["__typename"]
  | FragmentSelf4293["typenameHint"] | FragmentToken4291 | FragmentToken4292;
