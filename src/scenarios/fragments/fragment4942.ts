import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4940 } from "./fragment4940";
import type { FragmentToken4941 } from "./fragment4941";

export const FRAGMENT_4942 = gql(`
  fragment Fragment4942 on Member181 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_181
    memberCount_181
    memberMetric_181
  }
`);

type FragmentResult4942 = ResultOf<typeof FRAGMENT_4942>;
type FragmentSelf4942 = NonNullable<FragmentResult4942>;

export type FragmentToken4942 =
  | FragmentSelf4942["__typename"]
  | FragmentSelf4942["typenameHint"] | FragmentToken4940 | FragmentToken4941;
