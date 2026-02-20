import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken053 } from "./fragment053";
import type { FragmentToken054 } from "./fragment054";

export const FRAGMENT_055 = gql(`
  fragment Fragment055 on Member54 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_54
    memberCount_54
    memberMetric_54
  }
`);

type FragmentResult055 = ResultOf<typeof FRAGMENT_055>;
type FragmentSelf055 = NonNullable<FragmentResult055>;

export type FragmentToken055 =
  | FragmentSelf055["__typename"]
  | FragmentSelf055["typenameHint"] | FragmentToken053 | FragmentToken054;
