import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken547 } from "./fragment547";
import type { FragmentToken548 } from "./fragment548";

export const FRAGMENT_549 = gql(`
  fragment Fragment549 on Member268 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_268
    memberCount_268
    memberMetric_268
  }
`);

type FragmentResult549 = ResultOf<typeof FRAGMENT_549>;
type FragmentSelf549 = NonNullable<FragmentResult549>;

export type FragmentToken549 =
  | FragmentSelf549["__typename"]
  | FragmentSelf549["typenameHint"] | FragmentToken547 | FragmentToken548;
