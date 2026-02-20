import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken302 } from "./fragment302";
import type { FragmentToken303 } from "./fragment303";

export const FRAGMENT_304 = gql(`
  fragment Fragment304 on Member23 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_23
    memberCount_23
    memberMetric_23
  }
`);

type FragmentResult304 = ResultOf<typeof FRAGMENT_304>;
type FragmentSelf304 = NonNullable<FragmentResult304>;

export type FragmentToken304 =
  | FragmentSelf304["__typename"]
  | FragmentSelf304["typenameHint"] | FragmentToken302 | FragmentToken303;
