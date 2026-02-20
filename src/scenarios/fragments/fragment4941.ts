import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4939 } from "./fragment4939";
import type { FragmentToken4940 } from "./fragment4940";

export const FRAGMENT_4941 = gql(`
  fragment Fragment4941 on Member180 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_180
    memberCount_180
    memberMetric_180
  }
`);

type FragmentResult4941 = ResultOf<typeof FRAGMENT_4941>;
type FragmentSelf4941 = NonNullable<FragmentResult4941>;

export type FragmentToken4941 =
  | FragmentSelf4941["__typename"]
  | FragmentSelf4941["typenameHint"] | FragmentToken4939 | FragmentToken4940;
