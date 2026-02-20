import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken060 } from "./fragment060";
import type { FragmentToken061 } from "./fragment061";

export const FRAGMENT_062 = gql(`
  fragment Fragment062 on Member61 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_61
    memberCount_61
    memberMetric_61
  }
`);

type FragmentResult062 = ResultOf<typeof FRAGMENT_062>;
type FragmentSelf062 = NonNullable<FragmentResult062>;

export type FragmentToken062 =
  | FragmentSelf062["__typename"]
  | FragmentSelf062["typenameHint"] | FragmentToken060 | FragmentToken061;
