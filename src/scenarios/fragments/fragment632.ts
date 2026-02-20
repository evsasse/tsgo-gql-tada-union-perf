import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken630 } from "./fragment630";
import type { FragmentToken631 } from "./fragment631";

export const FRAGMENT_632 = gql(`
  fragment Fragment632 on Member71 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_71
    memberCount_71
    memberMetric_71
  }
`);

type FragmentResult632 = ResultOf<typeof FRAGMENT_632>;
type FragmentSelf632 = NonNullable<FragmentResult632>;

export type FragmentToken632 =
  | FragmentSelf632["__typename"]
  | FragmentSelf632["typenameHint"] | FragmentToken630 | FragmentToken631;
