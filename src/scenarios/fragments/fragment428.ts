import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken426 } from "./fragment426";
import type { FragmentToken427 } from "./fragment427";

export const FRAGMENT_428 = gql(`
  fragment Fragment428 on Member147 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_147
    memberCount_147
    memberMetric_147
  }
`);

type FragmentResult428 = ResultOf<typeof FRAGMENT_428>;
type FragmentSelf428 = NonNullable<FragmentResult428>;

export type FragmentToken428 =
  | FragmentSelf428["__typename"]
  | FragmentSelf428["typenameHint"] | FragmentToken426 | FragmentToken427;
