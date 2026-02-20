import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken593 } from "./fragment593";
import type { FragmentToken594 } from "./fragment594";

export const FRAGMENT_595 = gql(`
  fragment Fragment595 on Member34 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_34
    memberCount_34
    memberMetric_34
  }
`);

type FragmentResult595 = ResultOf<typeof FRAGMENT_595>;
type FragmentSelf595 = NonNullable<FragmentResult595>;

export type FragmentToken595 =
  | FragmentSelf595["__typename"]
  | FragmentSelf595["typenameHint"] | FragmentToken593 | FragmentToken594;
