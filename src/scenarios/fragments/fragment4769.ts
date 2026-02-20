import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4767 } from "./fragment4767";
import type { FragmentToken4768 } from "./fragment4768";

export const FRAGMENT_4769 = gql(`
  fragment Fragment4769 on Member08 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_08
    memberCount_08
    memberMetric_08
  }
`);

type FragmentResult4769 = ResultOf<typeof FRAGMENT_4769>;
type FragmentSelf4769 = NonNullable<FragmentResult4769>;

export type FragmentToken4769 =
  | FragmentSelf4769["__typename"]
  | FragmentSelf4769["typenameHint"] | FragmentToken4767 | FragmentToken4768;
