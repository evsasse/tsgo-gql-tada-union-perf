import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4262 } from "./fragment4262";
import type { FragmentToken4263 } from "./fragment4263";

export const FRAGMENT_4264 = gql(`
  fragment Fragment4264 on Member63 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_63
    memberCount_63
    memberMetric_63
  }
`);

type FragmentResult4264 = ResultOf<typeof FRAGMENT_4264>;
type FragmentSelf4264 = NonNullable<FragmentResult4264>;

export type FragmentToken4264 =
  | FragmentSelf4264["__typename"]
  | FragmentSelf4264["typenameHint"] | FragmentToken4262 | FragmentToken4263;
