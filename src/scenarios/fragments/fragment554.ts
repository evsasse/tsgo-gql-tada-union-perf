import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken552 } from "./fragment552";
import type { FragmentToken553 } from "./fragment553";

export const FRAGMENT_554 = gql(`
  fragment Fragment554 on Member273 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_273
    memberCount_273
    memberMetric_273
  }
`);

type FragmentResult554 = ResultOf<typeof FRAGMENT_554>;
type FragmentSelf554 = NonNullable<FragmentResult554>;

export type FragmentToken554 =
  | FragmentSelf554["__typename"]
  | FragmentSelf554["typenameHint"] | FragmentToken552 | FragmentToken553;
