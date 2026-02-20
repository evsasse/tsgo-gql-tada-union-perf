import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4507 } from "./fragment4507";
import type { FragmentToken4508 } from "./fragment4508";

export const FRAGMENT_4509 = gql(`
  fragment Fragment4509 on Member28 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_28
    memberCount_28
    memberMetric_28
  }
`);

type FragmentResult4509 = ResultOf<typeof FRAGMENT_4509>;
type FragmentSelf4509 = NonNullable<FragmentResult4509>;

export type FragmentToken4509 =
  | FragmentSelf4509["__typename"]
  | FragmentSelf4509["typenameHint"] | FragmentToken4507 | FragmentToken4508;
