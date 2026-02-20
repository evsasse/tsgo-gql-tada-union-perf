import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken611 } from "./fragment611";
import type { FragmentToken612 } from "./fragment612";

export const FRAGMENT_613 = gql(`
  fragment Fragment613 on Member52 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_52
    memberCount_52
    memberMetric_52
  }
`);

type FragmentResult613 = ResultOf<typeof FRAGMENT_613>;
type FragmentSelf613 = NonNullable<FragmentResult613>;

export type FragmentToken613 =
  | FragmentSelf613["__typename"]
  | FragmentSelf613["typenameHint"] | FragmentToken611 | FragmentToken612;
