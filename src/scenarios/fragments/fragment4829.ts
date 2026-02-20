import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4827 } from "./fragment4827";
import type { FragmentToken4828 } from "./fragment4828";

export const FRAGMENT_4829 = gql(`
  fragment Fragment4829 on Member68 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_68
    memberCount_68
    memberMetric_68
  }
`);

type FragmentResult4829 = ResultOf<typeof FRAGMENT_4829>;
type FragmentSelf4829 = NonNullable<FragmentResult4829>;

export type FragmentToken4829 =
  | FragmentSelf4829["__typename"]
  | FragmentSelf4829["typenameHint"] | FragmentToken4827 | FragmentToken4828;
