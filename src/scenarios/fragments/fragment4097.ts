import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4095 } from "./fragment4095";
import type { FragmentToken4096 } from "./fragment4096";

export const FRAGMENT_4097 = gql(`
  fragment Fragment4097 on Member176 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_176
    memberCount_176
    memberMetric_176
  }
`);

type FragmentResult4097 = ResultOf<typeof FRAGMENT_4097>;
type FragmentSelf4097 = NonNullable<FragmentResult4097>;

export type FragmentToken4097 =
  | FragmentSelf4097["__typename"]
  | FragmentSelf4097["typenameHint"] | FragmentToken4095 | FragmentToken4096;
