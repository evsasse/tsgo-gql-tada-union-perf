import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4022 } from "./fragment4022";
import type { FragmentToken4023 } from "./fragment4023";

export const FRAGMENT_4024 = gql(`
  fragment Fragment4024 on Member103 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_103
    memberCount_103
    memberMetric_103
  }
`);

type FragmentResult4024 = ResultOf<typeof FRAGMENT_4024>;
type FragmentSelf4024 = NonNullable<FragmentResult4024>;

export type FragmentToken4024 =
  | FragmentSelf4024["__typename"]
  | FragmentSelf4024["typenameHint"] | FragmentToken4022 | FragmentToken4023;
