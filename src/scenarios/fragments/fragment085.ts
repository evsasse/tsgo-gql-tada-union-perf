import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken083 } from "./fragment083";
import type { FragmentToken084 } from "./fragment084";

export const FRAGMENT_085 = gql(`
  fragment Fragment085 on Member84 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_84
    memberCount_84
    memberMetric_84
  }
`);

type FragmentResult085 = ResultOf<typeof FRAGMENT_085>;
type FragmentSelf085 = NonNullable<FragmentResult085>;

export type FragmentToken085 =
  | FragmentSelf085["__typename"]
  | FragmentSelf085["typenameHint"] | FragmentToken083 | FragmentToken084;
