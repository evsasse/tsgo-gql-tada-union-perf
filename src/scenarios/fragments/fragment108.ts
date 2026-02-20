import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken106 } from "./fragment106";
import type { FragmentToken107 } from "./fragment107";

export const FRAGMENT_108 = gql(`
  fragment Fragment108 on Member107 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_107
    memberCount_107
    memberMetric_107
  }
`);

type FragmentResult108 = ResultOf<typeof FRAGMENT_108>;
type FragmentSelf108 = NonNullable<FragmentResult108>;

export type FragmentToken108 =
  | FragmentSelf108["__typename"]
  | FragmentSelf108["typenameHint"] | FragmentToken106 | FragmentToken107;
