import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken291 } from "./fragment291";
import type { FragmentToken292 } from "./fragment292";

export const FRAGMENT_293 = gql(`
  fragment Fragment293 on Member12 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_12
    memberCount_12
    memberMetric_12
  }
`);

type FragmentResult293 = ResultOf<typeof FRAGMENT_293>;
type FragmentSelf293 = NonNullable<FragmentResult293>;

export type FragmentToken293 =
  | FragmentSelf293["__typename"]
  | FragmentSelf293["typenameHint"] | FragmentToken291 | FragmentToken292;
