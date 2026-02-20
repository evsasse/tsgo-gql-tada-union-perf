import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken554 } from "./fragment554";
import type { FragmentToken555 } from "./fragment555";

export const FRAGMENT_556 = gql(`
  fragment Fragment556 on Member275 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_275
    memberCount_275
    memberMetric_275
  }
`);

type FragmentResult556 = ResultOf<typeof FRAGMENT_556>;
type FragmentSelf556 = NonNullable<FragmentResult556>;

export type FragmentToken556 =
  | FragmentSelf556["__typename"]
  | FragmentSelf556["typenameHint"] | FragmentToken554 | FragmentToken555;
