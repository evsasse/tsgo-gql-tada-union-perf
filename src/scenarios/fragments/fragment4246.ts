import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4244 } from "./fragment4244";
import type { FragmentToken4245 } from "./fragment4245";

export const FRAGMENT_4246 = gql(`
  fragment Fragment4246 on Member45 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_45
    memberCount_45
    memberMetric_45
  }
`);

type FragmentResult4246 = ResultOf<typeof FRAGMENT_4246>;
type FragmentSelf4246 = NonNullable<FragmentResult4246>;

export type FragmentToken4246 =
  | FragmentSelf4246["__typename"]
  | FragmentSelf4246["typenameHint"] | FragmentToken4244 | FragmentToken4245;
