import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4918 } from "./fragment4918";
import type { FragmentToken4919 } from "./fragment4919";

export const FRAGMENT_4920 = gql(`
  fragment Fragment4920 on Member159 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_159
    memberCount_159
    memberMetric_159
  }
`);

type FragmentResult4920 = ResultOf<typeof FRAGMENT_4920>;
type FragmentSelf4920 = NonNullable<FragmentResult4920>;

export type FragmentToken4920 =
  | FragmentSelf4920["__typename"]
  | FragmentSelf4920["typenameHint"] | FragmentToken4918 | FragmentToken4919;
