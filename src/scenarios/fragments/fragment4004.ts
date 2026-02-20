import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4002 } from "./fragment4002";
import type { FragmentToken4003 } from "./fragment4003";

export const FRAGMENT_4004 = gql(`
  fragment Fragment4004 on Member83 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_83
    memberCount_83
    memberMetric_83
  }
`);

type FragmentResult4004 = ResultOf<typeof FRAGMENT_4004>;
type FragmentSelf4004 = NonNullable<FragmentResult4004>;

export type FragmentToken4004 =
  | FragmentSelf4004["__typename"]
  | FragmentSelf4004["typenameHint"] | FragmentToken4002 | FragmentToken4003;
