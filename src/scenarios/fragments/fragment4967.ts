import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4965 } from "./fragment4965";
import type { FragmentToken4966 } from "./fragment4966";

export const FRAGMENT_4967 = gql(`
  fragment Fragment4967 on Member206 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_206
    memberCount_206
    memberMetric_206
  }
`);

type FragmentResult4967 = ResultOf<typeof FRAGMENT_4967>;
type FragmentSelf4967 = NonNullable<FragmentResult4967>;

export type FragmentToken4967 =
  | FragmentSelf4967["__typename"]
  | FragmentSelf4967["typenameHint"] | FragmentToken4965 | FragmentToken4966;
