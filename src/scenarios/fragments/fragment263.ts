import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken261 } from "./fragment261";
import type { FragmentToken262 } from "./fragment262";

export const FRAGMENT_263 = gql(`
  fragment Fragment263 on Member262 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_262
    memberCount_262
    memberMetric_262
  }
`);

type FragmentResult263 = ResultOf<typeof FRAGMENT_263>;
type FragmentSelf263 = NonNullable<FragmentResult263>;

export type FragmentToken263 =
  | FragmentSelf263["__typename"]
  | FragmentSelf263["typenameHint"] | FragmentToken261 | FragmentToken262;
