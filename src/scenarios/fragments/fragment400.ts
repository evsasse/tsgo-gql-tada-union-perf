import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken398 } from "./fragment398";
import type { FragmentToken399 } from "./fragment399";

export const FRAGMENT_400 = gql(`
  fragment Fragment400 on Member119 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_119
    memberCount_119
    memberMetric_119
  }
`);

type FragmentResult400 = ResultOf<typeof FRAGMENT_400>;
type FragmentSelf400 = NonNullable<FragmentResult400>;

export type FragmentToken400 =
  | FragmentSelf400["__typename"]
  | FragmentSelf400["typenameHint"] | FragmentToken398 | FragmentToken399;
