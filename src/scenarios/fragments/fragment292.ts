import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken290 } from "./fragment290";
import type { FragmentToken291 } from "./fragment291";

export const FRAGMENT_292 = gql(`
  fragment Fragment292 on Member11 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_11
    memberCount_11
    memberMetric_11
  }
`);

type FragmentResult292 = ResultOf<typeof FRAGMENT_292>;
type FragmentSelf292 = NonNullable<FragmentResult292>;

export type FragmentToken292 =
  | FragmentSelf292["__typename"]
  | FragmentSelf292["typenameHint"] | FragmentToken290 | FragmentToken291;
