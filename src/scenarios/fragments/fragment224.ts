import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken222 } from "./fragment222";
import type { FragmentToken223 } from "./fragment223";

export const FRAGMENT_224 = gql(`
  fragment Fragment224 on Member223 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_223
    memberCount_223
    memberMetric_223
  }
`);

type FragmentResult224 = ResultOf<typeof FRAGMENT_224>;
type FragmentSelf224 = NonNullable<FragmentResult224>;

export type FragmentToken224 =
  | FragmentSelf224["__typename"]
  | FragmentSelf224["typenameHint"] | FragmentToken222 | FragmentToken223;
