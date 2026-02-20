import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4124 } from "./fragment4124";
import type { FragmentToken4125 } from "./fragment4125";

export const FRAGMENT_4126 = gql(`
  fragment Fragment4126 on Member205 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_205
    memberCount_205
    memberMetric_205
  }
`);

type FragmentResult4126 = ResultOf<typeof FRAGMENT_4126>;
type FragmentSelf4126 = NonNullable<FragmentResult4126>;

export type FragmentToken4126 =
  | FragmentSelf4126["__typename"]
  | FragmentSelf4126["typenameHint"] | FragmentToken4124 | FragmentToken4125;
