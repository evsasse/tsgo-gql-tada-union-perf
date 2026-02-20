import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken478 } from "./fragment478";
import type { FragmentToken479 } from "./fragment479";

export const FRAGMENT_480 = gql(`
  fragment Fragment480 on Member199 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_199
    memberCount_199
    memberMetric_199
  }
`);

type FragmentResult480 = ResultOf<typeof FRAGMENT_480>;
type FragmentSelf480 = NonNullable<FragmentResult480>;

export type FragmentToken480 =
  | FragmentSelf480["__typename"]
  | FragmentSelf480["typenameHint"] | FragmentToken478 | FragmentToken479;
