import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken295 } from "./fragment295";
import type { FragmentToken296 } from "./fragment296";

export const FRAGMENT_297 = gql(`
  fragment Fragment297 on Member16 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_16
    memberCount_16
    memberMetric_16
  }
`);

type FragmentResult297 = ResultOf<typeof FRAGMENT_297>;
type FragmentSelf297 = NonNullable<FragmentResult297>;

export type FragmentToken297 =
  | FragmentSelf297["__typename"]
  | FragmentSelf297["typenameHint"] | FragmentToken295 | FragmentToken296;
