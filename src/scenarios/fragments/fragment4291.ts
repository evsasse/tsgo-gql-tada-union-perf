import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4289 } from "./fragment4289";
import type { FragmentToken4290 } from "./fragment4290";

export const FRAGMENT_4291 = gql(`
  fragment Fragment4291 on Member90 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_90
    memberCount_90
    memberMetric_90
  }
`);

type FragmentResult4291 = ResultOf<typeof FRAGMENT_4291>;
type FragmentSelf4291 = NonNullable<FragmentResult4291>;

export type FragmentToken4291 =
  | FragmentSelf4291["__typename"]
  | FragmentSelf4291["typenameHint"] | FragmentToken4289 | FragmentToken4290;
