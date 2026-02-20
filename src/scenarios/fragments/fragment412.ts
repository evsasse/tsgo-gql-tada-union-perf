import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken410 } from "./fragment410";
import type { FragmentToken411 } from "./fragment411";

export const FRAGMENT_412 = gql(`
  fragment Fragment412 on Member131 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_131
    memberCount_131
    memberMetric_131
  }
`);

type FragmentResult412 = ResultOf<typeof FRAGMENT_412>;
type FragmentSelf412 = NonNullable<FragmentResult412>;

export type FragmentToken412 =
  | FragmentSelf412["__typename"]
  | FragmentSelf412["typenameHint"] | FragmentToken410 | FragmentToken411;
