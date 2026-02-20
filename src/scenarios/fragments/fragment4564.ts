import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4562 } from "./fragment4562";
import type { FragmentToken4563 } from "./fragment4563";

export const FRAGMENT_4564 = gql(`
  fragment Fragment4564 on Member83 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_83
    memberCount_83
    memberMetric_83
  }
`);

type FragmentResult4564 = ResultOf<typeof FRAGMENT_4564>;
type FragmentSelf4564 = NonNullable<FragmentResult4564>;

export type FragmentToken4564 =
  | FragmentSelf4564["__typename"]
  | FragmentSelf4564["typenameHint"] | FragmentToken4562 | FragmentToken4563;
