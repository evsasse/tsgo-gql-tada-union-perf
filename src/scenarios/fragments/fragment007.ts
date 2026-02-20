import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken005 } from "./fragment005";
import type { FragmentToken006 } from "./fragment006";

export const FRAGMENT_007 = gql(`
  fragment Fragment007 on Member06 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_06
    memberCount_06
    memberMetric_06
  }
`);

type FragmentResult007 = ResultOf<typeof FRAGMENT_007>;
type FragmentSelf007 = NonNullable<FragmentResult007>;

export type FragmentToken007 =
  | FragmentSelf007["__typename"]
  | FragmentSelf007["typenameHint"] | FragmentToken005 | FragmentToken006;
