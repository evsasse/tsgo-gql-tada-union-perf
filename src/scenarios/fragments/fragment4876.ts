import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4874 } from "./fragment4874";
import type { FragmentToken4875 } from "./fragment4875";

export const FRAGMENT_4876 = gql(`
  fragment Fragment4876 on Member115 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_115
    memberCount_115
    memberMetric_115
  }
`);

type FragmentResult4876 = ResultOf<typeof FRAGMENT_4876>;
type FragmentSelf4876 = NonNullable<FragmentResult4876>;

export type FragmentToken4876 =
  | FragmentSelf4876["__typename"]
  | FragmentSelf4876["typenameHint"] | FragmentToken4874 | FragmentToken4875;
