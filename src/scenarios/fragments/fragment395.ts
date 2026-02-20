import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken393 } from "./fragment393";
import type { FragmentToken394 } from "./fragment394";

export const FRAGMENT_395 = gql(`
  fragment Fragment395 on Member114 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_114
    memberCount_114
    memberMetric_114
  }
`);

type FragmentResult395 = ResultOf<typeof FRAGMENT_395>;
type FragmentSelf395 = NonNullable<FragmentResult395>;

export type FragmentToken395 =
  | FragmentSelf395["__typename"]
  | FragmentSelf395["typenameHint"] | FragmentToken393 | FragmentToken394;
