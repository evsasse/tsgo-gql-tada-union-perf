import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken824 } from "./fragment824";
import type { FragmentToken825 } from "./fragment825";

export const FRAGMENT_826 = gql(`
  fragment Fragment826 on Member265 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_265
    memberCount_265
    memberMetric_265
  }
`);

type FragmentResult826 = ResultOf<typeof FRAGMENT_826>;
type FragmentSelf826 = NonNullable<FragmentResult826>;

export type FragmentToken826 =
  | FragmentSelf826["__typename"]
  | FragmentSelf826["typenameHint"] | FragmentToken824 | FragmentToken825;
