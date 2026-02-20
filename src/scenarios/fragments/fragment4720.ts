import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4718 } from "./fragment4718";
import type { FragmentToken4719 } from "./fragment4719";

export const FRAGMENT_4720 = gql(`
  fragment Fragment4720 on Member239 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_239
    memberCount_239
    memberMetric_239
  }
`);

type FragmentResult4720 = ResultOf<typeof FRAGMENT_4720>;
type FragmentSelf4720 = NonNullable<FragmentResult4720>;

export type FragmentToken4720 =
  | FragmentSelf4720["__typename"]
  | FragmentSelf4720["typenameHint"] | FragmentToken4718 | FragmentToken4719;
