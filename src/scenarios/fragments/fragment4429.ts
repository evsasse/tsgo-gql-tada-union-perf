import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4427 } from "./fragment4427";
import type { FragmentToken4428 } from "./fragment4428";

export const FRAGMENT_4429 = gql(`
  fragment Fragment4429 on Member228 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_228
    memberCount_228
    memberMetric_228
  }
`);

type FragmentResult4429 = ResultOf<typeof FRAGMENT_4429>;
type FragmentSelf4429 = NonNullable<FragmentResult4429>;

export type FragmentToken4429 =
  | FragmentSelf4429["__typename"]
  | FragmentSelf4429["typenameHint"] | FragmentToken4427 | FragmentToken4428;
