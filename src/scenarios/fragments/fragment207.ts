import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken205 } from "./fragment205";
import type { FragmentToken206 } from "./fragment206";

export const FRAGMENT_207 = gql(`
  fragment Fragment207 on Member206 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_206
    memberCount_206
    memberMetric_206
  }
`);

type FragmentResult207 = ResultOf<typeof FRAGMENT_207>;
type FragmentSelf207 = NonNullable<FragmentResult207>;

export type FragmentToken207 =
  | FragmentSelf207["__typename"]
  | FragmentSelf207["typenameHint"] | FragmentToken205 | FragmentToken206;
