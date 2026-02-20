import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4752 } from "./fragment4752";
import type { FragmentToken4753 } from "./fragment4753";

export const FRAGMENT_4754 = gql(`
  fragment Fragment4754 on Member273 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_273
    memberCount_273
    memberMetric_273
  }
`);

type FragmentResult4754 = ResultOf<typeof FRAGMENT_4754>;
type FragmentSelf4754 = NonNullable<FragmentResult4754>;

export type FragmentToken4754 =
  | FragmentSelf4754["__typename"]
  | FragmentSelf4754["typenameHint"] | FragmentToken4752 | FragmentToken4753;
